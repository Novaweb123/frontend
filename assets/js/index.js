
let searchBar = document.getElementById('myInput');
let responseData = [];

const prevButton = document.getElementById('prev_Button')
const nextButton = document.getElementById('next_Button')
let currentPage = 1;


const updatePageContent = () => {
	// fetch('http://localhost:5000/pmsstock?Location=19')
	fetch(`http://localhost:5000/pmsstock/19?page=${currentPage}&limit=20`)
		.then((respond) => {
			console.log(respond.status)
			return respond.json();
		}).then((completeData) => {
			let storedData = '', data = '';
			data = completeData;
			data.map((e, index) => {
				storedData += `<tr key=${e.ID}}>
							<td>${e.Date_modified}</td>
							<td>${e.ID}</td>
							<td>${e.MSKU}</td>
							<td>${e.Item_name}</td>
							<td>${e.Quantity}</td>
							<td>${e.Location}</td>
							<td>${e.Brand}</td>
							<td>${e.Product_Category}</td>
							<td>${e.Category}</td>
							<td>${e.MRP}</td>
							<td>${e.Item_Amount}</td>
							<td>${e.Batch}</td>
							<td>${e.Manf_date}</td>
							<td>${e.Expiry_date}</td>
							<td>${e.Available_Qty}</td>
							<td>${e.Blocked_Qty}</td>
						</tr>`
			})
			document.getElementById("belmont_table_body").innerHTML = storedData
		})

	// fetch('http://localhost:5000/pmsstock?Location=20')
	fetch(`http://localhost:5000/pmsstock/20?page=${currentPage}&limit=20`)
		.then((respond) => {
			console.log(respond.status)
			return respond.json();
		}).then((completeData) => {
			let storedData = '', data = '';
			data = completeData;
			data.map((e, key) => {
				storedData += `<tr key=${e.id}>
							<td>${e.Date_modified}</td>
							<td>${e.ID}</td>
							<td>${e.MSKU}</td>
							<td>${e.Item_name}</td>
							<td>${e.Quantity}</td>
							<td>${e.Location}</td>
							<td>${e.Brand}</td>
							<td>${e.Product_Category}</td>
							<td>${e.Category}</td>
							<td>${e.MRP}</td>
							<td>${e.Item_Amount}</td>
							<td>${e.Batch}</td>
							<td>${e.Manf_date}</td>
							<td>${e.Expiry_date}</td>
							<td>${e.Available_Qty}</td>
							<td>${e.Blocked_Qty}</td>
						</tr>`
			})
			document.getElementById('richmond_table_body').innerHTML = storedData;
		})

	// // fetch('http://localhost:5000/pmsstock?Location=1')
	fetch(`http://localhost:5000/pmsstock/1?page=${currentPage}&limit=20`)
		.then((respond) => {
			console.log(respond.status)
			return respond.json();
		}).then((completeData) => {
			let storedData = '', data = '';
			data = completeData;
			data.map((e, key) => {
				storedData += `<tr key=${e.id}>
							<td>${e.Date_modified}</td>
							<td>${e.ID}</td>
							<td>${e.MSKU}</td>
							<td>${e.Item_name}</td>
							<td>${e.Quantity}</td>
							<td>${e.Location}</td>
							<td>${e.Brand}</td>
							<td>${e.Product_Category}</td>
							<td>${e.Category}</td>
							<td>${e.MRP}</td>
							<td>${e.Item_Amount}</td>
							<td>${e.Batch}</td>
							<td>${e.Manf_date}</td>
							<td>${e.Expiry_date}</td>
							<td>${e.Available_Qty}</td>
							<td>${e.Blocked_Qty}</td>
						</tr>`
			})
			document.getElementById('hyderabad_table_body').innerHTML = storedData;
		})

	// fetch('http://localhost:5000/pmsstock?Location=17')
	fetch(`http://localhost:5000/pmsstock/17?page=${currentPage}&limit=20`)
		.then((respond) => {
			console.log(respond.status)
			return respond.json();
		}).then((completeData) => {
			let storedData = '', data = '';
			data = completeData;
			data.map((e, key) => {
				storedData += `<tr key=${e.id}>
							<td>${e.Date_modified}</td>
							<td>${e.ID}</td>
							<td>${e.MSKU}</td>
							<td>${e.Item_name}</td>
							<td>${e.Quantity}</td>
							<td>${e.Location}</td>
							<td>${e.Brand}</td>
							<td>${e.Product_Category}</td>
							<td>${e.Category}</td>
							<td>${e.MRP}</td>
							<td>${e.Item_Amount}</td>
							<td>${e.Batch}</td>
							<td>${e.Manf_date}</td>
							<td>${e.Expiry_date}</td>
							<td>${e.Available_Qty}</td>
							<td>${e.Blocked_Qty}</td>
						</tr>`
			})
			document.getElementById('hariwdar_table_body').innerHTML = storedData;
		})
}

updatePageContent();

// document.addEventListener('DOMContentLoaded', console.log("hello"));



// const searchBarFunction = () => {
//     document.getElementById('myInput').addEventListener('input', function () {
//         let searchValue = this.value.toLowerCase(); 
// 		console.log(searchValue);

//         fetch(`http://localhost:5000/allpmcstocks?page=${currentPage}&limit=21`)
//             .then((res) => {
//                 return res.json();
//             })
//             .then((response) => {
// 				console.log(response)
//                 let data = response.filter((e) =>e.Item_name && e.Item_name.toLowerCase().includes(searchValue));

//                 let storedFullData = '';
//                 data.forEach((e) => {
//                     storedFullData += `<tr key=${e.id}>
//                                         <td>${e.Date_modified}</td>
//                                         <td>${e.ID}</td>
//                                         <td>${e.MSKU}</td>
//                                         <td>${e.Item_name}</td>
//                                         <td>${e.Quantity}</td>
//                                         <td>${e.Location}</td>
//                                         <td>${e.Brand}</td>
//                                         <td>${e.Product_Category}</td>
//                                         <td>${e.Category}</td>
//                                         <td>${e.MRP}</td>
//                                         <td>${e.Item_Amount}</td>
//                                         <td>${e.Batch}</td>
//                                         <td>${e.Manf_date}</td>
//                                         <td>${e.Expiry_date}</td>
//                                         <td>${e.Available_Qty}</td>
//                                         <td>${e.Blocked_Qty}</td>
//                                     </tr>`;
//                 });

//                 document.getElementById('belmont_table_body').innerHTML = storedFullData;
//             })
//             // .catch((error) => {
//             //     console.error('Error fetching data:', error);
//             // });
//     });
// };

// const searchBarFunction = () => {
// 	let allData = []; // Store the full data
// 	// let currentPage = 1;
// 	const itemsPerPage = 30;

// 	// Fetch all data initially
// 	fetch('http://localhost:5000/allpmcstocks')
// 		.then((res) => res.json())
// 		.then((response) => {
// 			allData = response;
// 			// updateTable(allData.slice(0, itemsPerPage)); // Initial display with the first page of data
// 		})
// 		.catch((error) => {
// 			console.error('Error fetching data:', error);
// 		});

// 	document.getElementById('myInput').addEventListener('input', function () {
// 		let searchValue = this.value.toLowerCase();

// 		// Filter the full data based on the searchValue
// 		// let filteredData = allData.filter((e) => e.Item_name && e.Item_name.toLowerCase().includes(searchValue));
// 		let filteredData = allData.filter((e) => {
// 			return (
// 				e.Item_name && e.Item_name.toLowerCase().includes(searchValue) ||
// 				e.MSKU && e.MSKU.toLowerCase().includes(searchValue)
// 			);
// 		})
// 		// Update the table with the filtered and paginated data
// 		updateTable(getPageData(filteredData, currentPage, itemsPerPage));
// 	});
// };

// // Function to update the table based on the provided data
// const updateTable = (data) => {
// 	let storedFullData = '';
// 	data.forEach((e) => {
// 		storedFullData += `<tr key=${e.id}>
//                             <td>${e.Date_modified}</td>
//                             <td>${e.ID}</td>
//                             <td>${e.MSKU}</td>
//                             <td>${e.Item_name}</td>
//                             <td>${e.Quantity}</td>
//                             <td>${e.Location}</td>
//                             <td>${e.Brand}</td>
//                             <td>${e.Product_Category}</td>
//                             <td>${e.Category}</td>
//                             <td>${e.MRP}</td>
//                             <td>${e.Item_Amount}</td>
//                             <td>${e.Batch}</td>
//                             <td>${e.Manf_date}</td>
//                             <td>${e.Expiry_date}</td>
//                             <td>${e.Available_Qty}</td>
//                             <td>${e.Blocked_Qty}</td>
//                         </tr>`
// 	});

	
// 	// document.getElementById('belmont_table_body').innerHTML = storedFullData 
// 	// document.getElementById('richmond_table_body').innerHTML = storedFullData
// };


const searchBarFunction = () => {
    let belmontData , richmondData,  allData = [];
    const itemsPerPage = 30;
    let currentPage = 1;
	let belmontId = document.getElementById('belmont_table_body');
	let richmondId = document.getElementById('richmond_table_body');
	let allUpdatedIds = [belmontId, richmondId];
	
	// debugger

	// Fetch All data initially
	fetch('http://localhost:5000/allpmcstocks')
	.then((response) => response.json())
	.then((response) => {
		allData = response
	})
	.catch((err) => {
		console.log('Error fetching allData:', err)
	})

    // Fetch Belmont data initially
	fetch(`http://localhost:5000/pmsstock/19?page=${currentPage}&limit=50`)
        .then((res) => res.json())
        .then((response) => {
            belmontData = response;
            // updateTable('belmont_table_body', belmontData.slice(0, itemsPerPage)); // Initial display with the first page of data
        })
        .catch((error) => {
            console.error('Error fetching Belmont data:', error);
        });

    // Fetch Richmond data initially
    fetch(`http://localhost:5000/pmsstock/20?page=${currentPage}&limit=50`)
        .then((res) => res.json())
        .then((response) => {
            richmondData = response;
        })
        .catch((error) => {
            console.error('Error fetching Richmond data:', error);
        });

    document.getElementById('myInput').addEventListener('input', function () {
        let searchValue = this.value.toLowerCase();

		//Filter allData based on the searchValue
		let AllFilteredData = allData.filter((e) => {
			return (
				e.Item_name && e.Item_name.toLowerCase().includes(searchValue) ||
				e.MSKU && e.MSKU.toLowerCase().includes(searchValue)
			)
		})

		updateTable(['belmont_table_body',], getPageData(AllFilteredData, currentPage, itemsPerPage))

        // // Filter Belmont data based on the searchValue
        // let belmontFilteredData = belmontData.filter((e) => {
        //     return (
        //         e.Item_name && e.Item_name.toLowerCase().includes(searchValue) ||
        //         e.MSKU && e.MSKU.toLowerCase().includes(searchValue)
        //     );
        // });

        // // Update the Belmont table with the filtered and paginated data
        // updateTable('belmont_table_body', getPageData(belmontFilteredData, currentPage, itemsPerPage));

        // // Filter Richmond data based on the searchValue
        // let richmondFilteredData = richmondData.filter((e) => {
        //     return (
        //         e.Item_name && e.Item_name.toLowerCase().includes(searchValue) ||
        //         e.MSKU && e.MSKU.toLowerCase().includes(searchValue)
        //     );
        // });

        // // Update the Richmond table with the filtered and paginated data
        // updateTable('richmond_table_body', getPageData(richmondFilteredData, currentPage, itemsPerPage));
    });
};

// Function to update the table based on the provided data
const updateTable = (tableId, data) => {
	console.log("line 327",tableId);
    let storedFullData = '';
    data.forEach((e) => {
        storedFullData += `<tr key=${e.id}>
                            <td>${e.Date_modified}</td>
                            <td>${e.ID}</td>
                            <td>${e.MSKU}</td>
                            <td>${e.Item_name}</td>
                            <td>${e.Quantity}</td>
                            <td>${e.Location}</td>
                            <td>${e.Brand}</td>
                            <td>${e.Product_Category}</td>
                            <td>${e.Category}</td>
                            <td>${e.MRP}</td>
                            <td>${e.Item_Amount}</td>
                            <td>${e.Batch}</td>
                            <td>${e.Manf_date}</td>
                            <td>${e.Expiry_date}</td>
                            <td>${e.Available_Qty}</td>
                            <td>${e.Blocked_Qty}</td>
                        </tr>`;
    });

    const tableElement = document.getElementById(tableId);
    console.log("Table Element:", tableElement);

    if (tableElement) {
        tableElement.innerHTML = storedFullData;
    } else {
        console.error("Table element not found with ID:", tableId);
    }
};


// Function to get a specific page of data
const getPageData = (data, currentPage, itemsPerPage) => {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	return data.slice(startIndex, endIndex);
};


const prevButtonFun = () => {
	currentPage--;
	updatePageContent()
}

const nextButtonFun = () => {
	currentPage++;
	updatePageContent();
}






