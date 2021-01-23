var me = {
    firstName: 'James',
    lastName: 'Goedert',
    favoriteNumber: '7'
};

var classMates = [{
    firstName: "William",
    lastName: "Watson",
    favoriteNumber: 7,
}, {
    firstName: 'Deb',
    LastName: 'Dogba',
    favoriteNumber: 7,
}, {
    firstName: 'Jen',
    lastName: 'Bogle',
    favoriteNumber: 14
}, {
    firstName: 'Miranda',
    lastName: 'McNiel',
    favoriteNumber: 6
}, {
    firstName: 'Lingli',
    lastName: 'Gan',
    favoriteNumber: 9
}, {
    firstName: 'Nick',
    lastName: 'Palandri',
    favoriteNumber: 6
}, {
    firstName: 'James',
    lastName: 'Goedert',
    favoriteNumber: 7
}

]

var ul = document.createElement('ul');

document.getElementById('classList').appendChild(ul);

for (var i = 0; i < classMates.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += classMates[i].firstName;
}


// console.log(me);
// console.log(classMates);