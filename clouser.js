function outer(){
    var outside = 'i am outer variable';
    console.log('out function');
    console.log(outside);
    inner();
        console.log('outer completed');


    function inner(){
        var inside = 'i am inside variable';
        console.log('inside function');
        console.log('inner');
    };
};
outer();