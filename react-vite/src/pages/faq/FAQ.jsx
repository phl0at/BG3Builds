import styles from "./FAQ.module.css";
import { useState } from "react";
import CategoryComponent from "../../components/faq/category/Categories";
import AnswersComponent from "../../components/faq/answers/Answers";

export default function FAQPage() {
  const [category, setCategory] = useState("Characters");

  return (
    <main className={styles.main}>
      <CategoryComponent category={category} setCategory={setCategory} />
      <AnswersComponent category={category} />
    </main>
  );
}
