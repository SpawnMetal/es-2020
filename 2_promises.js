const p1 = Promise.resolve(1)
const p2 = Promise.reject('my error')
const p3 = Promise.resolve(3)

// ;(async() => //Исключительная ситуация, где нужна ;
// {
//     const result = await Promise.all([p1, p2, p3]).catch(err => console.log(err))
//     console.log(result)
// })()

;(async() => //Исключительная ситуация, где нужна ;
{
    const result = await Promise.allSettled([p1, p2, p3]) //allSetteld Не попадёт в catch
    console.log(result)
})()