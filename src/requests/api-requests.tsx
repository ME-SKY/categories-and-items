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
    fetchCategories: async function(cb: Function,
                                    notFoundFunc: Function = notFound,
                                    somethingWentWrongFunc: Function = somethingWrong ){
        const res = await fetch('api/v1.0/categories.json', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        if(!res.ok && res.status === 404){
            notFoundFunc(res);
            return;
        }

        const data = await res.json();
        cb(data);
        return data;
    },
    fetchCategory: async (categoryUrl: string,
                          cb: Function = standardHandeDataFunction,
                          somethingWentWrongCb: Function = somethingWrong) => {
        const res = await fetch(`api/v1.0/${categoryUrl}.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!res.ok && res.status === 404){
            somethingWentWrongCb(res);
            return;
        }

        const data = await res.json();
        cb(data);

        return data;
    },
    fetchElement: async (elementFullUrl: string,
                         successCb: Function = standardHandeDataFunction,
                         smWrongCb: Function = somethingWrong) => {
        const res = await fetch(`api/v1.0/${elementFullUrl}.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!res.ok && res.status === 404){
            smWrongCb(res);
            return;
        }

        const data = await res.json();
        successCb(data);

        return data;
    }
};
