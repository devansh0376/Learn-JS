//scope means : {}
function one()
{
    const name="dev"
    function two()
    {
        const web="tube"
        console.log(name)
    }
    //console.log(web)
    two()
}
one()
//we can define and declare function anywhere but we can declare function before it define (holding in varible)