



class Complex{
    
    constructor(r,i)
    {
        this.r = r;
        this.i = i;   
    }

    add(data)
    {
        return new Complex(this.r+data.r,this.i+data.i);
    }


    sub(data)
    {
        return new Complex(this.r-data.r,this.i-data.i);
    }
    
    mul(data)
    {
        return new Complex(this.r*data.r-this.i*data.i);
    }

    toString()
    {
        return this.r + "+" + this.i + "i";
    }
}

let data1 = new Complex(1,2);
let data2 = new Complex(3,5);
let res = data1.mul(data2);
console.log("%s",res);











