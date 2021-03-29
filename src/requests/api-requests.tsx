const somethingWrong = (res: any) => {
    console.log('Something went wrong! ', res);
};

const baseUrl: string = 'api/v1.0/';
const fakeNotFoundObject = {
    status: 404,
    statusText: 'Requested resource not founded',
};

export const ApiRequests = {
    fetchCategories: async function(smWrongFn: Function = somethingWrong ){
        const res = await fetch(`${baseUrl}categories.json`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

        let data: any;

        try {
            data = await res.json();
        } catch (e) {
            smWrongFn(fakeNotFoundObject);
        }

        return data;
    },
    fetchCategory: async (categoryUrl: string, smWrongFn: Function = somethingWrong) => {
        const res = await fetch(`${baseUrl}${categoryUrl}.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data: any;

        try {
            data = await res.json();
        } catch (err) {
            smWrongFn(fakeNotFoundObject);
        }

        return data;
    },
    fetchElement: async (elementFullUrl: string, smWrongFn: Function = somethingWrong) => {
        const res = await fetch(`${baseUrl}${elementFullUrl}.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data: any;

        try {
            data = await res.json();
            return data;
        } catch (e) {
            smWrongFn(fakeNotFoundObject)
        }
    }
};
