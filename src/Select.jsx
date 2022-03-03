import React from 'react'

const Select = ({color, text}) => {
    return <form className='entry'>
                <label style={{backgroundColor: color}} className='frm'>{text} 
                    <select className='input' type="text">
                        <option value="keyword_by_asin">keyword_by_asin</option>
                        <option value="keyword_by_keyword">keyword_by_keyword</option>
                        <option value="historical_search_volume">historical_search_volume</option>
                        <option value="sales_estimates">sales_estimates</option>

                    </select>
                </label>
            </form>
  
  }
  
  export default Select