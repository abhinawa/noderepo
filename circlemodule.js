const {PI}=Math;
exports.area=(r)=>PI*r**2;
exports.circumferance=(r)=>2*PI*r;

exports.dimeter=(r)=>{
    console.log(`diameter of circle is ${2*r}`);
};
console.log("not get any err");
