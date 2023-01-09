import image from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";

export default function Video() {
  return (
    <div className={classes.video}>
      <img src={image} alt="Video Title" />
      <p>#1 Software Architecture Definition Process</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}
