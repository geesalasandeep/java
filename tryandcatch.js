function createData(){
    let x = 20;
    if(x == 10){
        setTimeout(() => {
            resolve('data created')
        }, 5000);
    }
    else{
        setTimeout(() => {
            reject('data not created')
        }, 5000);
    }
}

    async function showdata() {
        console.log('process started');
        try{
            let res = await createData();
            console.log(res);
        }
        catch (err){
            console.log(err);
        }
        setTimeout(() => {
            console.log('show data');
        }, 2000);
    };
    showdata();



