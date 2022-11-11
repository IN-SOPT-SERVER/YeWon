/* 랜덤 짝 배정 및 식사 메뉴 정해주기 */

// 1. Member, Dinner interface 생성 및 타입 지정
// 2. organize 내부 로직 채우기

interface Member
{
    name: string;
    group: string;
}

interface Dinner
{
    members: Member[];
    shuffle(array: Member[]): Member[];
    organize(array:Member[]): void;
}

const dinner: Dinner ={
    members: [
        {
            name: "소예원",
            group: "yb"
        },
        {
            name: "조예슬",
            group: "yb"
        },
        {
            name: "최승빈",
            group: "ob"
        },
        {
            name: "권세훈",
            group: "ob"
        }
    ],
    shuffle(array: Member[]) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array: Member[]){
        this.shuffle(array);
        const dinnerMem = array.map(members => members.name);
        console.log(`${dinnerMem[0]}과 ${dinnerMem[1]} 두 분이서 저녁을 먹게 됩니다!`)
    }    
}

dinner.organize(dinner.members);
