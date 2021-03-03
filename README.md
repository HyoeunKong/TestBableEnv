## @babel/preset-env 이용하기
실행환경에 대한 정보를 설정해 주면 자동으로 필요한 기능을 주입해 준다.

예를 들어 , babel.config.js 파일에 다음 내용을 입력하면 특정 버전의 브라우저를 위한 플러그인만 포함된다.

@babel/preset-env 설정 예
```javascript
const presets = [
    [
    '@babel/preset-env',
    {
        targets:'> 0.25%, not dead',
    },
    ]
]
module.exports = {presets}
```

1. targets 속성으로 지원하는 브라우저 정보를 입력한다.
여기서는 시장 점유율이 0.25% 이상이고 업데이트가 종료 되지 않은 브라우저를 입력했다.


### babel.config.js 작성 

```javascript
const presets = [
    [
        '@babel/preset-env', //1
        {
            targets:{
                chrome:"40" //2
            },
            useBuiltIns:'entry', //3
            corejs:{version:3, proposals:true},
        },      
    ]
]

module.exports = {presets}
```

1. @babel/preset-env 프리셋을 사용한다.
2. 크롬 버전을 최소 40으로 설정
3. useBuiltIns 속성은 폴리필과 관련된 설정이다. useBuiltInts 속성에 entry를 입력하면 지원하는 브라우저에서 필요한 폴리필만 포함시킨다.
4. 바벨에게 core-js 버전을 알려준다.

### code.js 작성

```javascript
    import 'core-js';

    const p = Promise.resolve(10)
    const obj = {
        a:10,
        b:20,
        c:30
    };
    const arr = Object.values(obj);
    const exist = arr.inclueds(20);
```

5. useBuiltIns 속성에 entry를 입력하면 특정 브라우저 버전에서 필요한 폴리 필이 모두 추가된다.
   useBuiltIns 속성에 usage를 입력하면 코드에서 사용된 기능의 폴리필만 추가된다 import 'core-js' 지워줘야함


## 바벨 플러그인 제작하기
바벨은 프리셋과 플러그인을 누구나 제작할 수 있도록 API를 제공한다.
API를 이용해 바벨 플러그인을 직접 제작해보고, 바벨의 내부 동작을 이해해본다




   

