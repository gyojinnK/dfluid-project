# Atomic design pattern

## 폴더명 및 역할

- atoms: 가장 작은 단위(HTML 태그에 대응하는 요소)를 관리.
- molecules: atoms를 결합한 하나의 의미를 갖는 UI UI. ex) BannerCard, UserAvatar
- organisms: atoms, molecules의 집합. ex) Header, Section, Article, Footer
- templates: 실제 데이터를 제외한 전체적인 레이아웃, 뼈대
