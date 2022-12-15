import React from "react";
import { Form } from "react-router-dom";
import Favorite from "./favorite";

function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          alt="이미지가 없음"
          key={contact.avatar}
          src={contact.avatar || null} // 앞에가 있으면 앞에꺼를 return 앞에가 없으면 뒤에꺼 return
        />
      </div>
      <div>
        <h1>
          {
            // 조건식 true false로 나옴
            contact.first || contact.last ? (
              <div>
                {contact.first} {contact.last}
              </div>
            ) : (
              <i>No Name</i>
            )
          }
          <Favorite contact={contact} />
        </h1>
        {/* 앞에 조건(변수) true이면 뒤에꺼를 return 해라 */}
        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
              rel="noreferrer"
            >
              {contact.twitter}
            </a>
          </p>
        )}
        {/* contact.notes가 true이면 뒤에꺼를 return해라 */}
        {
          // 여기에는 이렇게 주석이 들어가는거는 괜찮아요
          // 왜냐 {} 안이니까 javascript가 들어갈 수 있어요
          // 자바스크립트 주석이랑 같이 동작합니다.
          contact.notes && <p>{contact.notes}</p>
        }

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              // 이벤트가 발생 했을 때 원래 Form은 페이지가 전환이 되면서 데이터가 넘어갑니다.
              // 그런데 우리는 React는 하나의 페이지에서 동작해야하기 때문에 페이지 이동이 되면 안되요.
              // Form에서 submit에 기본 동작인 페이지 이동을 막는 함수가 밑에 event.preventDefault()입니다.
              event.preventDefault();
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
