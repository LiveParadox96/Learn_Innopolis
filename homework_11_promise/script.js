

async function fetchDate(){
    const response = await fetch('https://reqres.in/api/users?per_page=12')
    const result = await response.json();
    console.log(result)
    let data =result.data
            console.log('-------');
            console.log('Пункт№1');
            console.log('-------')
    console.log(data)
            console.log('-------');
            console.log('Пункт№2');
            console.log('-------')
    let lastName = data.map(item => {
        return item.last_name
        });
    let firstStr= lastName.join(' ')
    console.log(firstStr)
            console.log('-------');
            console.log('Пункт№3');
            console.log('-------')
    const firstSimbol = lastName.filter(item =>{
        return item.startsWith('F')
    });
    const firstSimbolStr = firstSimbol.join(' ')
    console.log(firstSimbolStr)
            console.log('-------');
            console.log('Пункт№4');
            console.log('-------')
    let familyAndNameArr = data.map(item =>{
        return `${item.first_name} ${item.last_name}`
    });
    let familyAndNameStr= familyAndNameArr.join(', ')

    let fourQvest = familyAndNameArr.reduce((acc,item)=>{
        item = new Array
        item = familyAndNameStr
        return `Наша база содержит данные следующих пользователей: ${[item]}`
    })
        console.log(fourQvest)
            console.log('-------');
            console.log('Пункт№5');
            console.log('-------')
            console.log(Object.keys(result.data['0']).join(`, `));
}
fetchDate();