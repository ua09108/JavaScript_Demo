const Gender = {
    Male : 1,
    Female : 2
}

var gender1 = Gender.Male;
console.log(gender1);
var gender2 = Gender.Female;
console.log(gender2);

const GENDER_MALE = Symbol("Male");
const GENDER_FEMALE = Symbol("Female");

function getGender(gender){
    switch (gender){
        case GENDER_MALE:
            console.log(String(GENDER_MALE));
            break;
        case GENDER_FEMALE:
            console.log(String(GENDER_FEMALE));
            break;
        default:
            console.log("Unknown");
    }
}

getGender(GENDER_MALE);
getGender(GENDER_FEMALE);