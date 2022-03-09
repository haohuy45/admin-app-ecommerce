import React from 'react'
import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Doanh thu</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">250.000</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">So với hôm qua</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Đơn hàng</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">250.000</span>
                <span className="featuredMoneyRate">+11.4 <ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">So với hôm qua</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Doanh thu</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">250.000</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">So với hôm qua</span>
        </div>
    </div>
  )
}
