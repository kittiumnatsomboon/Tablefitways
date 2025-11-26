import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
export default function Home() {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];

    // Define your data
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 3,
            title: 'The Shawshank Redemption',
            year: '1994',
        },
        {
            id: 4,
            title: 'The Dark Knight',
            year: '2008',
        },
    ];
    return (
        <div>
            <DataTable
                title="Movie List"
                columns={columns}
                data={data}
                pagination // Add pagination
                paginationPerPage={7}
                highlightOnHover // Highlight rows on hover
                pointerOnHover // Show pointer cursor on hover
                responsive // Make the table responsive
            />
        </div>
    )
}