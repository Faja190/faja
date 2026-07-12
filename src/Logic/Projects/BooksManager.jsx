import { useState, useEffect } from "react";
import styles from "../../Styles/BooksManager.module.css";

const API_URL = import.meta.env.DEV
  ? "http://localhost:5083/api/books"
  : "https://web-production-7c98c.up.railway.app/api/books";

export default function BooksManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBooks(data);
    } catch {
      setError("Could not connect to the Books API. Make sure it is running.");
    }
  }

  async function handleSubmit() {
    if (!title || !author || !year) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    const book = { title, author, year: parseInt(year) };

    if (editingId !== null) {
      await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      setEditingId(null);
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
    }

    setTitle("");
    setAuthor("");
    setYear("");
    fetchBooks();
  }

  async function handleDelete(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchBooks();
  }

  function handleEdit(book) {
    setEditingId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setYear(book.year);
  }

  function handleCancel() {
    setEditingId(null);
    setTitle("");
    setAuthor("");
    setYear("");
    setError("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>📚 Books Manager</h2>
        <p className={styles.subtitle}>
          Live demo powered by an ASP.NET Core REST API + SQLite database
        </p>
        <div className={styles.techBadges}>
          <span className={styles.badge}>ASP.NET Core</span>
          <span className={styles.badge}>C#</span>
          <span className={styles.badge}>Entity Framework</span>
          <span className={styles.badge}>SQLite</span>
          <span className={styles.badge}>REST API</span>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Form */}
      <div className={styles.form}>
        <p className={styles.formLabel}>Add a Book</p>
        <input
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.formButtons}>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            {editingId !== null ? "Update Book" : "Add Book"}
          </button>
          {editingId !== null && (
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Books List */}
      <div className={styles.booksList}>
        {books.length === 0 && !error && (
          <p className={styles.empty}>No books yet — add one above!</p>
        )}
        {books.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <div className={styles.bookInfo}>
              <span className={styles.bookTitle}>{book.title}</span>
              <span className={styles.bookMeta}>
                {book.author} · {book.year}
              </span>
            </div>
            <div className={styles.bookActions}>
              <button
                className={styles.editBtn}
                onClick={() => handleEdit(book)}
              >
                Edit
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}