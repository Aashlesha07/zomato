import React from 'react'
import './filter.css'
import FilterItem from './filteritem';

const Filters = ({ filterList }) => {
    return (
        <div clasName="filters">
            {filterList &&
                filterList.map((filter) => {
                    return <FilterItem filter={filter} key={filter.id} />;
                })}
        </div>
    );
};
export default Filters;
