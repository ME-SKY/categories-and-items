const notFound =  (res: Response) => {
        console.log('not found!');
        console.log(res);
};

const somethingWrong = (err: any) => {
    console.log('Something went wrong! ', err);
};

const standardHandeDataFunction = (data: any) => {
    console.log('Data is: ', data);
};

export const ApiRequests = {
    fetchCategories: async function(smWrongFn: Function = somethingWrong ){
        const res = await fetch('api/v1.0/categries.json', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        if(!res.ok && res.status === 404){
            smWrongFn(res);
            return;
        }

        try {
            console.log('try catch workin')
            const data = await res.json();
            return data;
        } catch (e) {
            smWrongFn(res);
            console.log('catch block works now');
            console.log(e)
        }

        // const data = await res.json();
        // return data;
    },
    fetchCategory: async (categoryUrl: string, smWrongFn: Function = somethingWrong) => {
        const res = await fetch(`api/v1.0/${categoryUrl}.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!res.ok && res.status === 404){
            smWrongFn(res);
            return;
        }

        try {
            console.log('try catch workin')
            const data = await res.json();
            return data;
        } catch (err) {
            console.log('catch block works now');
            console.log(err)
        }

        // cb(data);


    },
    fetchElement: async (elementFullUrl: string, smWrongFn: Function = somethingWrong) => {
        const res = await fetch(`api/v1.0/${elementFullUrl}.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        try {
            const data = await res.json();
            return data;
        } catch (e) {
            console.log('catch block works now');
            console.log(e)
        }

        if(!res.ok && res.status === 404){
            smWrongFn(res);
            return;
        }



    }
};
