
export const userInfo = [{
    username : '류준열',
    email : 'ryu9663@korea.com',
    image : 'https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319',
    blog : 'https://github.com/codestates/GatherCoding',
    user_address : '충북 제천시',
    joinGroup : [
        {
            title : '제천 고등학생 코딩연합??',
            population : 3,
            currentPopulation : 1,
            gather_location : '제천 제일고',
            leader : '짱구',
            location_address : '충북 제천시',
            //우선 약속시간 text로 받자
            promise : '매주 월,수,금 20~22시',
            start_time : '20:00',
            end_time : '22:00'
        },
        {
            title : '제천 코딩학원??',
            population : 3,
            currentPopulation : 1,
            gather_location : '제천 시립도서관',
            leader : '설동혁',
            location_address : '충북 제천시',
            promise : '매주 월,수,금 20~22시',
            start_time : '20:00',
            end_time : '22:00' 
        }
    ]},
    {
    username : '이윤환',
    email : 'lee@korea.com',
    image : 'https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319',
    blog : 'https://github.com/codestates/GatherCoding',
    user_address : '충북 청주시',
    joinGroup : [
        {
            title : '제천 고등학생 코딩연합??',
            population : 3,
            currentPopulation : 1,
            gather_location : '제천 제일고',
            leader : '짱구',
            location_address : '충북 제천시' 
        },
        
    ]
    }

]

export const groups = [
    {
        title : '청주 모각코',
        population : 8,
        currentPopulation : 2,
        gather_location : '상당산성 꼭대기',
        leader : '류준열',
        location_address : '충북 청주시'
    },
    {
        title : '김천 모각코',
        population : 3,
        currentPopulation : 2,
        gather_location : '김천터미널',
        leader : '설동혁',
        location_address : '경북 김천시'
    },
    {
        title : '청주에서 신나는 모각코',
        population : 9,
        currentPopulation : 5,
        gather_location : '정북동토성 소나무 옆',
        leader : '이윤환',
        location_address : '충북 청주시' 
    },
    {
        title : '충대 전정대 모여',
        population : 20,
        currentPopulation : 14,
        gather_location : '충북대 중문 스타벅스',
        leader : '양예솔',
        location_address : '충북 청주시' 
    },
    {
        title : '제천에 개발자 있나??',
        population : 3,
        currentPopulation : 1,
        gather_location : '제천 시민회관',
        leader : '류준열',
        location_address : '충북 제천시' 
    },
    {
        title : '제천 고등학생 코딩연합??',
        population : 3,
        currentPopulation : 1,
        gather_location : '제천 제일고',
        leader : '짱구',
        location_address : '충북 제천시',
        // !
        user : [userInfo[0] , userInfo[1]]
        
        // !
    },
    {
        title : '제천 코딩학원??',
        population : 3,
        currentPopulation : 1,
        gather_location : '제천 시립도서관',
        leader : '설동혁',
        location_address : '충북 제천시' ,
        user : [userInfo[0] ]
    }
]

// 류준열이 참가하고 있는 모각코모임
export const userGroup = [
    {
        title : '청주 모각코',
        population : 8,
        currentPopulation : 2,
        gather_location : '상당산성 꼭대기',
        leader : '류준열',
        location_address : '충북 청주시',

    },
    {
        title : '청주에서 신나는 모각코',
        population : 9,
        currentPopulation : 5,
        gather_location : '정북동토성 소나무 옆',
        leader : '이윤환',
        location_address : '충북 청주시' 
    }
]