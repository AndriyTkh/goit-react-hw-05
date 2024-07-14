import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import css from "./BackBtn.module.css";

export default function BackBtn({ backlink }) {
  return (
    <Link to={backlink}>
      <button className={css.backBtn}>
        <HiArrowLeft></HiArrowLeft> Go back
      </button>
    </Link>
  );
}
