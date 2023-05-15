import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logo1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["~Web Question & Multiple choice~"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className="banner" id="introduce">
      <Container>
        <Row className="aligh-items-center text-bold">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Quizz Game</span>
                  <h1>{`Hi! I'm Magic Xuan Tung`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Question & Multiple choice"]'><span className="wrap">{text}</span></span></h1>
                  <p>Quizizz là một ứng dụng được dùng để kiểm tra kiến thức ở các môn học cũng như kiến thức xã hội thông qua hình thức trả lời trắc nghiệm. Các câu hỏi trắc nghiệm trong Quizizz thuộc nhiều danh mục với cấp độ khác nhau để học sinh thử sức, đánh giá trình độ của bản thân; hoặc giáo viên, phụ huynh có thể truy cập bộ câu hỏi do người khác chia sẻ để sử dụng trong giảng dạy, kèm cặp con em mình. Nhìn chung, Quizizz phù hợp với cả việc học tại nhà và trên lớp.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
