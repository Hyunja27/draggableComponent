<br/>

# < DraggableComponent >


#### 🪡  Developed By _"FE Developer Spark (박성현)"_

<br/>
<br/>

  
  <div align="center">
    <img src="https://postfiles.pstatic.net/MjAyMjA1MjdfMjA0/MDAxNjUzNTg0NjYyNDc2.IHfkhNQmDW_hmggXRwoEhggXLdQ-NN2ONrYm_Qnp-SIg.x71UpHXMqWlOYOyu3WtRJBuE1hg3cf8MNiOmdtwnKPUg.GIF.123gk/TOTAL.gif?type=w580" alt="spark's Draggable GIF"/>
  
  ###### ~~_부모님 집에 Servi 하나 놔드려야겠어요_~~
  </div>
</div>

<br/>
<br/>



## 🗺️ Overview


<div align="center">
  
  ```
  
  자유롭게 제작 가능한 Box 컴포넌트와, 이에 Draggable 기능을 부여하는 Draggable Component를 제작하고, 기능을 검증합니다.
  

  (+) TypeScript와 unit-test(by jest)를 사용하여 제작해봅니다.
  
  ```
  
  </div>
</div>



<br/>
<br/>
<br/>

## ❗️ Notice

<br/>

- "Box" 컴포넌트를 "Robot" 이라는 이름으로 바꾸어 제작했답니다. 제출 서브젝트에는 "BOX"로 명기되어 있기는 했으나, 이는 Draggable 컴포넌트의 기능부여를 받아내는 의미로 사용되었다고 판단했어요. 제 Draggable 컴포넌트의 기획의도와 더 부합하는 컴포넌트 명칭은 "Robot"이라고 생각했기에, "Box" 컴포넌트 역할을 대신할 "Robot" 컴포넌트를 선보입니다. 🤖

<br/>

- "Draggable" 소스코드 중 "GiveDraggableAttr"라는 컴포넌트가 있어요. 이것은 독립적인 컴포넌트인데, 몇 가지 이유가 있다고 판단되어 "Draggable" 파일 내에 위치시켰습니다. 

<br/>
<br/>
<br/>

## 🧰 Tech


<code>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="48" alt="React"/>
</code>

<code>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="48" alt="typescript"/>
</code>

  
<br/>
<br/>
<br/>



## 🔑 KeyPoint (just my opinion..)
- Robot(서브젝트 상 Box 컴포넌트를 의미) 컴포넌트와 Draggable 컴포넌트는 독립적으로 렌더링될 수 있는 별개의 컴포넌트여야 한다.
- Draggable 컴포넌트는 자식 요소를 가질 수 있고, 자식요소가 없는 경우와 있는경우 모두 렌더링에 문제가 없어야 한다.
- Draggable 컴포넌트는 자식 요소에게 Draggable 기능을 부여해야 하고, 자식이 다중적으로 주어질 경우 모두 별개로 움직이도록 관리해야 한다.
- 컴포넌트가 Drag 될 떄에는 자연스럽게 이동해야 하고, 클릭이 중단되었을 경우 그 위치에 정확히 자리잡아야 한다.
- 컴포넌트를 Drag 하기 위해 클릭을 수행할 때, 컴포넌트의 클릭한 부분의 위치를 정확히 포인팅 하고 움직여야 한다. 불필요한 flashing 이나 rerender가 생기면 안된다.
- 컴포넌트는 Draggable 컴포넌트가 제공하는 zone 안에서만 이동해야 하고, 경계선에 근접하거나 부딫히면 경게 안쪽으로 컴포넌트를 제한하는 기능이 있어야 한다.
<br/>
