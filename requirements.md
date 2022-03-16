💡 **요구 사항([상세내용 보기](https://www.notion.so/React-Native-0aa917342761467180ff390c69e6d6f9))**

- **3개의 페이지**를 만들어 주세요
  - [Memo 목록 페이지](https://www.notion.so/React-Native-0aa917342761467180ff390c69e6d6f9)
  - [Memo 내용 페이지](https://www.notion.so/React-Native-0aa917342761467180ff390c69e6d6f9)
  - [Memo 수정 페이지](https://www.notion.so/React-Native-0aa917342761467180ff390c69e6d6f9)
- 서버 호출 API는 사용하지 않습니다.
- Data 저장소는 global store (redux, context, react-query 등)를 사용해주세요.
  - Global store에 저장되어야하는 memo의 기본 데이터 형태는 다음과 같이 모델링해주세요.
    ```tsx
    {
    // unique string 값
    id: 'AMIFE-6AEM-EFIAM-MEIFE',
    title: 'memo의 제목입니다',
    description: 'memo의 상세 내용입니다.',
    // memo의 생성날짜
    createdAt: '2021-01-06',
    // memo의 업데이트 날짜
    updatedAt: '2021-02-01',
    }
    ```
    **혹시, 추가로 필요한 data가 있으면 추가해서 사용해주세요.**
