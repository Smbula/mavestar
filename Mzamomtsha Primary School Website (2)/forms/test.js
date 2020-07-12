describe("concat", function(){
     // inserting arrays using Uint8Array, meaning that 8 values wil be present
    let chunks=[
        new Uint8Array([0,1,2]),
        new Uint8Array([3,4,5]),
        new Uint8Array([5,7,8]),
    ];
    // alert the user if the arrays contain same type 
    it("results has the same array type", function(){
        let result = concat(chunks);
        assert.equal(result.constructor,Uint8Array);
    });
    // show the results or the output of the array
    it("concatenates arrays", function(){
        let result = concat(chunks);
        assert.deepEqual(result, new Uint8Array([0,1,2,3,4,5,6,7,8]));

    });
    // if there is no input invovled then display nothing and make the value initial zero 
    it("returns empty array on empty inputs", function(){
        let result= concat([]);
        assert.equal(result.length,0);
    });
});