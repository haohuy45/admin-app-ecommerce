import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory, updateCategories } from '../../actions'
import { Input } from '../../components/UI/input/Input.jsx'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree'
import Modal from '../../components/UI/Modal/Modal'
import { IoIosCheckboxOutline, IoIosCheckbox, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

export const Category = () => {
    const category = useSelector(state => state.category)
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
    const dispatch = useDispatch();

    // useEffect(() => {

    //     if (!category.loading) {
    //         setShow(false);
    //     }

    // }, [category.loading]);

    const handleClose = () => {
        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form))
        setCategoryName('');
        setParentCategoryId('');
        // const cat = {
        //     categoryName,
        //     parentCategoryId,
        //     categoryImage
        // }
        // console.log(cat)
        setShow(false)

        console.log("test")
    };
    const handleShow = () => {
        setShow(true)
    };

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }

                // <li key={category.name}>
                //     {category.name}
                //     {category.children.length > 0 ? (<ul>
                //         {renderCategories(category.children)}
                //     </ul>) : null}
                // </li>
            )
        }
        return myCategories
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({
                // value: category._id, 
                // label: category.name,
                // children: category.children.length > 0 && renderCategories(category)

                value: category._id, name: category.name, parentId: category.parentId
            });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options
    }
    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    const updateCategory = () => {
        updateCheckedAndExpandedCategories();
        setUpdateCategoryModal(true);

    }

    const updateCheckedAndExpandedCategories = () => {
        const categories = createCategoryList(category.categories);
        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId === category.value);
            category && checkedArray.push(category);
        })

        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value);
            category && expandedArray.push(category);
        })
        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);

        console.log({ checked, expanded, categories, checkedArray, expandedArray })
    }

    const handleCategoryInput = (key, value, index, type) => {
        if (type == "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
            setCheckedArray(updatedCheckedArray);
        } else if (type == "expanded") {
            const updatedExpandedArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
            setExpandedArray(updatedExpandedArray);
        }
    }

    const updateCategoriesForm = () => {
        const form = new FormData();

        expandedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        })

        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);

        })

        dispatch(updateCategories(form))
            .then(result => {
                if (result) {
                    dispatch(getAllCategory())
                }
            })

        setUpdateCategoryModal(false)
    }

    const renderUpdateCategoriesModal = () => {
        return (
            <Modal
                show={updateCategoryModal}
                handleClose={updateCategoriesForm}
                modalTitle={'Update Categories'}
                size="lg"
            >
                <Row>
                    <Col>
                        <h6>Expanded</h6>
                    </Col>
                </Row>
                {
                    expandedArray.length > 0 && expandedArray.map((item, index) => {

                        return (
                            <>
                                <Row key={index}>
                                    <Col>
                                        <Input
                                            value={item.name}
                                            placeholder={`Category name`}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}

                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <select className='form-control' value={item.parentId} onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}>
                                            <option>select category</option>
                                            {
                                                createCategoryList(category.categories).map(option => (
                                                    <option key={option.value} value={option.value}>{option.name}</option>
                                                ))
                                            }
                                        </select>
                                    </Col>
                                    <Col>
                                        <select>
                                            <option value="">Select Type</option>
                                            <option value="store">Store</option>
                                            <option value="product">Product</option>
                                            <option value="page">Page</option>
                                        </select>
                                    </Col>
                                </Row>
                                {/* <input type='file' name='categoryImage' onChange={handleCategoryImage} /> */}
                            </>
                        )
                    })
                }
                <h6>Checked Categories</h6>
                {
                    checkedArray.length > 0 && checkedArray.map((item, index) => {

                        return (
                            <>
                                <Row key={index}>
                                    <Col>
                                        <Input
                                            value={item.name}
                                            placeholder={`Category name`}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}

                                        />
                                    </Col>
                                    <Col>
                                        <select className='form-control' value={item.parentId} onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}>
                                            <option>select category</option>
                                            {
                                                createCategoryList(category.categories).map(option => (
                                                    <option key={option.value} value={option.value}>{option.name}</option>
                                                ))
                                            }
                                        </select>
                                    </Col>
                                    <Col>
                                        <select className='form-control'>
                                            <option value="">Select Type</option>
                                            <option value="store">Store</option>
                                            <option value="product">Product</option>
                                            <option value="page">Page</option>
                                        </select>
                                    </Col>
                                </Row>
                                {/* <input type='file' name='categoryImage' onChange={handleCategoryImage} /> */}
                            </>
                        )
                    })
                }


            </Modal>
        )
    }

    console.log(show)
    // const renderAddCategoryModal = () => {
    //     <Modal
    //         show={show}
    //         handleClose={handleClose}
    //         modalTitle={'Add New Category'}
    //     >
    //         <Input
    //             value={categoryName}
    //             placeholder={`Category name`}
    //             onChange={(e) => setCategoryName(e.target.value)}
    //         />
    //         <select className='form-control' value={parentCategoryId} onChange={(e) => setParentCategoryId(e.target.value)}>
    //             <option>select category</option>
    //             {
    //                 createCategoryList(category.categories).map(option => (
    //                     <option key={option.value} value={option.value}>{option.name}</option>
    //                 ))
    //             }
    //         </select>
    //         <input type='file' name='categoryImage' onChange={handleCategoryImage} />
    //     </Modal>
    // }
    return (
        <div className='category'>
            <div className='category-content'>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Category</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {/* <ul>
                                {renderCategories(category.categories)}
                                
                            </ul> */}
                        <CheckboxTree
                            nodes={renderCategories(category.categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}

                            icons={{
                                check: <IoIosCheckbox />,
                                uncheck: <IoIosCheckboxOutline />,
                                halfCheck: <IoIosCheckboxOutline />,
                                expandClose: <IoIosArrowForward />,
                                expandOpen: <IoIosArrowDown />,
                            }}
                        />

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>Delete</button>
                        <button onClick={updateCategory}>Edit</button>
                    </Col>
                </Row>

                <Modal
                    show={show}
                    handleClose={handleClose}
                    modalTitle={'Add New Category'}
                >
                    <Input
                        value={categoryName}
                        placeholder={`Category name`}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <select className='form-control' value={parentCategoryId} onChange={(e) => setParentCategoryId(e.target.value)}>
                        <option>select category</option>
                        {
                            createCategoryList(category.categories).map(option => (
                                <option key={option.value} value={option.value}>{option.name}</option>
                            ))
                        }
                    </select>
                    <input type='file' name='categoryImage' onChange={handleCategoryImage} />
                </Modal>
                {/* {renderAddCategoryModal()} */}
                {renderUpdateCategoriesModal()}


                {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input 
                            value = {categoryName}
                            placeholder = {`Category name`}
                            onChange = {(e) => setCategoryName(e.target.value)}
                        />
                        <select className='form-control' value={parentCategoryId} onChange= {(e) => setParentCategoryId(e.target.value)}>
                            <option>select category</option>
                            {
                                createCategoryList(category.categories).map(option => (
                                    <option key={option.value} value={option.value}>{option.name}</option>
                                ))
                            }
                        </select>
                        <input type='file' name='categoryImage' onChange={handleCategoryImage}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}

            </div>
        </div>
    )
}
