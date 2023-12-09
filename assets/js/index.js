
let searchBar = document.getElementById('myInput');
let responseData = [];

const prevButton = document.getElementById('prev_Button')
const nextButton = document.getElementById('next_Button')
let currentPage = 1;


const updatePageContent = () => {
	fetch(`https://my-server-u7xs.onrender.com//pmsstock/19?page=${currentPage}&limit=20`)
	// fetch(`http://localhost:5000/pmsstock/19?page=${currentPage}&limit=20`)
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

// const searchBarFunction = () => {
// 	let belmontData, richmondData, allData = [];
// 	const itemsPerPage = 30;
// 	let currentPage = 1;
// 	let belmontId = document.getElementById('belmont_table_body');
// 	let richmondId = document.getElementById('richmond_table_body');
// 	let allUpdatedIds = [belmontId, richmondId];

// 	// Fetch All data initially
// 	fetch('http://localhost:5000/allpmcstocks')
// 		.then((response) => response.json())
// 		.then((response) => {
// 			allData = response;
// 			// Fetch Belmont data after fetching allData
// 			return fetch(`http://localhost:5000/pmsstock/19?page=${currentPage}&limit=50`);
// 		})
// 		.then((res) => res.json())
// 		.then((response) => {
// 			belmontData = response;
// 			// Fetch Richmond data after fetching BelmontData
// 			return fetch(`http://localhost:5000/pmsstock/20?page=${currentPage}&limit=50`);
// 		})
// 		.then((res) => res.json())
// 		.then((response) => {
// 			richmondData = response;

// 			// Attach input event listener after all data has been fetched
// 			document.getElementById('myInput').addEventListener('input', function () {
// 				let searchValue = this.value.toLowerCase();

// 				// Filter allData based on the searchValue
// 				let AllFilteredData = allData.filter((e) => {
// 					return (
// 						e.Item_name && e.Item_name.toLowerCase().includes(searchValue) ||
// 						e.MSKU && e.MSKU.toLowerCase().includes(searchValue)
// 					);
// 				});

// 				// Update all tables with the filtered and paginated data
// 				updateTables(getPageData(AllFilteredData, currentPage, itemsPerPage));
// 			});
// 		})
// 		.catch((err) => {
// 			console.log('Error fetching data:', err);
// 		});
// };

// const updateTables = (data) => {
// 	const tableIds = ['belmont_table_body', 'richmond_table_body', 'hariwdar_table_body', 'hyderabad_table_body' ];

// 	tableIds.forEach((tableId) => {
// 		let storedFullData = '';
// 		data.forEach((e) => {
// 			storedFullData += `<tr key=${e.id}>
//                                 <td>${e.Date_modified}</td>
//                                 <td>${e.ID}</td>
//                              	<td>${e.MSKU}</td>
//                              	<td>${e.Item_name}</td>
//                              	<td>${e.Quantity}</td>
//                              	<td>${e.Location}</td>
//                              	<td>${e.Brand}</td>
//                              	<td>${e.Product_Category}</td>
//                              	<td>${e.Category}</td>
//                              	<td>${e.MRP}</td>
//                              	<td>${e.Item_Amount}</td>
//                              	<td>${e.Batch}</td>
//                              	<td>${e.Manf_date}</td>
//                              	<td>${e.Expiry_date}</td>
//                              	<td>${e.Available_Qty}</td>
//                             	<td>${e.Blocked_Qty}</td>
//                             </tr>`;
// 		});

// 		const tableElement = document.getElementById(tableId);

// 		if (tableElement) {
// 			tableElement.innerHTML = storedFullData;
// 			console.log(tableElement.innerHTML);
// 		} else {
// 			console.error("Table element not found with ID:", tableId);
// 		}
// 	});
// };


// // Function to get a specific page of data
// const getPageData = (data, currentPage, itemsPerPage) => {
// 	const startIndex = (currentPage - 1) * itemsPerPage;
// 	const endIndex = startIndex + itemsPerPage;
// 	return data.slice(startIndex, endIndex);
// };

// // Call the function to initiate the process
// searchBarFunction();

const searchBarFunction = () => {
	let allData = [];
	const itemsPerPage = 30;
	let currentPage = 1;

	// Fetch All data initially
	fetch('http://localhost:5000/allpmcstocks')
		.then((response) => response.json())
		.then((response) => {
			allData = response;

			// Attach input event listener after all data has been fetched
			document.getElementById('myInput').addEventListener('input', function () {
				let searchValue = this.value.toLowerCase();

				// Get the selected category
				const selectedCategory = document.getElementById('category').value;

				let allFilteredData = allData.filter((e) => {
					let fieldvalue = e[selectedCategory]

					if(fieldvalue !== undefined && (typeof fieldvalue === "string" || typeof fieldvalue === "number" )) {
						// const fieldValeString = typeof fieldvalue === 'string' ? fieldvalue.toLowerCase() : String(fieldvalue);
						// return fieldValeString === searchValue;
						return String(fieldvalue).toLowerCase().includes(searchValue);	
					}

					return false;
				})

				// // Filter allData based on the selectedCategory and searchValue
				// let allFilteredData = allData.filter((e) => {
				// 	return e[selectedCategory] && e[selectedCategory].toLowerCase().includes(searchValue) 
				// });

				// Update all tables with the filtered and paginated data
				updateTables(getPageData(allFilteredData, currentPage, itemsPerPage));
			});
		})
		.catch((err) => {
			console.log('Error fetching data:', err);
		});
};

const updateTables = (data) => {
	const tableIds = ['belmont_table_body', 'richmond_table_body'];

	tableIds.forEach((tableId) => {
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

		if (tableElement) {
			tableElement.innerHTML = storedFullData;
			console.log(tableElement.innerHTML);
		} else {
			console.error("Table element not found with ID:", tableId);
		}
	});
};

// Function to get a specific page of data
const getPageData = (data, currentPage, itemsPerPage) => {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	return data.slice(startIndex, endIndex);
};

// Initial function call
searchBarFunction();

const prevButtonFun = () => {
	currentPage--;
	updatePageContent()
}

const nextButtonFun = () => {
	currentPage++;
	updatePageContent();
}






