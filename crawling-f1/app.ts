import  * as f1Api  from 'f1-api-node' 

const myFunction = async (): Promise<void> => {
    const driverLineup = await f1Api.getDriverLineup()
    console.log(driverLineup)
}

myFunction();