const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agendaList: [],
			cardSelectEdit: 0
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			createAgenda: () => {
                fetch('https://playground.4geeks.com/contact/agendas/hackerman', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
            },

            getAgenda:() => {
                const actions = getActions();
                fetch('https://playground.4geeks.com/contact/agendas/hackerman/contacts', {
                    method: "GET",
                })
                .then((res) => {
                    if(res.status === 404) {
                        actions.createAgenda();
                    }
                    console.log(res);
                    return res.json();
                })
                .then((data) => setStore({ agendaList: data.contacts }))
                .catch((err) => console.log(err));
            },

            createContact: (obj) => {
                const actions = getActions();
                fetch('https://playground.4geeks.com/contact/agendas/hackerman/contacts', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": obj.name,
                        "phone": obj.numberPhone,
                        "email": obj.email,
                        "address": obj.address
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    actions.getAgenda();
                    console.log(data);
                })
                .catch((err) => console.log(err));
            },

            contactDelete: (id) => {
                const actions = getActions();
                fetch(`https://playground.4geeks.com/contact/agendas/hackerman/contacts/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => console.log(res))
                .then((data) => {
                    console.log(data);
                    actions.getAgenda();
                })
                .catch((err) => console.log(err));
            },
			contactEdit: (id, newDates) => {
				const actions = getActions();
				fetch(`https://playground.4geeks.com/contact/agendas/hackerman/contacts/${id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"name": newDates.name,
						"phone": newDates.numberPhone,  
						"email": newDates.email,
						"address": newDates.address
					})
				})
				.then((res) => res.json())
				.then((data) => {
					actions.getAgenda(); 
					console.log(data);
				})
				.catch((err) => console.log(err));
			},
			setCardEditId: (id) =>{
				setStore({cardSelectEdit: id})
			}
		}
	};
};

export default getState;
