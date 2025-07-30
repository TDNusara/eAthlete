import React, { useState } from "react";
import { HiCheckCircle, HiXCircle, HiArrowCircleUp } from "react-icons/hi";
import Navbar from "../../components/NavbarManager";
import Footer from "../../components/Footer";
import "./articles.css";

// --- MOCK DATA ---
const articles = [
  {
    id: 1,
    title: "The Portuguese star declined the offer",
    snippet:
      "He felt honored - Marcelo Gallardo confirms he approached Cristiano Ronaldo about playing for River Plate at the Club World Cup, explaining that he was focused on preparing for the upcoming season. The offer was reportedly made during a private meeting between Gallardo's representatives and Ronaldo's agent in Riyadh. Sources close to the player suggest that while the prospect of playing in a prestigious South American tournament was intriguing, Ronaldo's immediate priority remains competing at the highest level in European football.",
    imageUrl: "https://placehold.co/600x400/222/fff?text=Ronaldo",
    fullContent:
      "He felt honored - Marcelo Gallardo confirms he approached Cristiano Ronaldo about playing for River Plate at the Club World Cup, explaining that he was focused on preparing for the upcoming season. The offer was reportedly made during a private meeting between Gallardo's representatives and Ronaldo's agent in Riyadh. Sources close to the player suggest that while the prospect of playing in a prestigious South American tournament was intriguing, Ronaldo's immediate priority remains competing at the highest level in European football to prepare for what might be his final international tournament. The decision has sparked a wide range of reactions from fans and pundits alike. Many respect his focus and dedication to his current commitments, while others lament the missed opportunity to see one of the world's greatest players grace the South American stage. Gallardo himself expressed understanding, stating, 'A player of his caliber has the right to choose his path. We respect his decision and wish him the best. Our focus remains on building the strongest team possible with the players who are here with us today.' This statement has been widely praised for its professionalism and respect for the player's autonomy, further cementing Gallardo's reputation as a world-class manager both on and off the pitch. The football world now watches eagerly to see what Ronaldo's next move will be as the European season progresses.",
    comments: [
      { id: 1, user: "Nisal", text: "Interesting move. I respect his focus." },
      {
        id: 2,
        user: "Coach_Kamal",
        text: "A true professional always knows their priorities.",
      },
    ],
  },
  {
    id: 2,
    title: "5 Tips to Improve Your Volleyball Spike",
    snippet:
      "The spike is one of the most thrilling moves in volleyball. Here are five professional tips to increase your power and accuracy...",
    fullContent:
      "The spike, or attack, is one of the most thrilling and game-changing moves in volleyball. Mastering it requires a combination of timing, technique, and athleticism. Here are five professional tips to increase your power and accuracy. \n\n1. Perfect your approach... \n\n2. Arm Swing Mechanics... \n\n3. Contact Point... \n\n4. Wrist Snap... \n\n5. Follow-through...",
    comments: [
      { id: 1, user: "Nisal", text: "Interesting move. I respect his focus." },
      {
        id: 2,
        user: "Coach_Kamal",
        text: "A true professional always knows their priorities.",
      },
    ],
  },
  {
    id: 3,
    title: "The Beginner's Guide to Karate Stances",
    snippet:
      "A strong foundation in Karate begins with mastering the basic stances. From Zenkutsu-dachi to Kiba-dachi, let's explore the fundamentals...",
    fullContent:
      "A strong foundation in Karate begins with mastering the basic stances (dachi). From Zenkutsu-dachi (front stance) to Kiba-dachi (horse stance), let's explore the fundamentals. Each stance has a specific purpose, providing stability for blocks (uke) and generating power for strikes (tsuki) and kicks (geri)...",
    comments: [
      { id: 1, user: "Nisal", text: "Interesting move. I respect his focus." },
      {
        id: 2,
        user: "Coach_Kamal",
        text: "A true professional always knows their priorities.",
      },
    ],
  },
  {
    id: 4,
    title: "How to Choose the Right Running Shoes",
    snippet:
      "Choosing the right shoe can prevent injury and improve performance. We break down the key factors to consider...",
    fullContent:
      "Choosing the right running shoe is one of the most critical decisions an athlete can make. The right pair can prevent injury and improve performance, while the wrong pair can lead to a host of problems. We break down the key factors to consider. First, understand your foot type and pronation...",
    comments: [
      { id: 1, user: "Nisal", text: "Interesting move. I respect his focus." },
      {
        id: 2,
        user: "Coach_Kamal",
        text: "A true professional always knows their priorities.",
      },
    ],
  },
  {
    id: 5,
    title: "Mental Toughness: The Athlete's Secret Weapon",
    snippet:
      "Beyond physical skill, mental fortitude is what separates the good from the great. Learn techniques to build resilience...",
    fullContent:
      "In the world of elite sports, physical skill is often a given. What truly separates the good from the great is mental toughness. This is the athlete's ability to persevere through adversity, maintain focus under pressure, and perform consistently at their peak...",
    comments: [
      { id: 1, user: "Nisal", text: "Interesting move. I respect his focus." },
      {
        id: 2,
        user: "Coach_Kamal",
        text: "A true professional always knows their priorities.",
      },
    ],
  },
];

const featuredImageUrl = "https://placehold.co/600x400/222/fff?text=Ronaldo";

const AddArticleModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    console.log("Saving article:", { title, description });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-form">
            <div className="topic-container">
              <input
                type="text"
                className="modal-input"
                placeholder="ADD TOPIC"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <textarea
              className="modal-input description-input"
              placeholder="ADD DESCRIPTION"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-actions">
            <HiXCircle onClick={onClose} className="modal-icon x-icon" />
            <HiCheckCircle
              onClick={handleSave}
              className="modal-icon check-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const ReadArticleModal = ({ article, onClose }) => {
  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    if (newComment.trim() === "") return; 

    console.log(`Posting comment on article ${article.id}: ${newComment}`);
    setNewComment(""); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content read-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="article-title">{article.title}</h2>
          <HiXCircle onClick={onClose} className="close-modal-icon" />
        </div>
        <div className="modal-scroll-content">
          <p className="article-full-content">{article.fullContent}</p>

          <div className="comment-section">
            <h3 className="comment-title">
              Comments ({article.comments ? article.comments.length : 0})
            </h3>

            <div className="comment-list">
              {article.comments && article.comments.length > 0 ? (
                article.comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <strong className="comment-user">{comment.user}:</strong>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        </div>
        <div className="comment-form">
          <input
            type="text"
            className="comment-input"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <HiArrowCircleUp
            onClick={handlePostComment}
            className="post-comment-icon"
          />
        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ article, onReadMore }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-snippet">{article.snippet}</p>
      <button className="see-more-button" onClick={() => onReadMore(article)}>
        See More...
      </button>
    </div>
  );
};

export default function Articles() {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseReadModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <Navbar />
      <div className="article-page-container">
        <header className="article-hero-section">
          <h1>
            <span className="hero-title-small">Place Your</span>
            <span className="hero-title-large">Articles Here</span>
          </h1>
        </header>

        <main className="article-content-wrapper">
          <div className="article-grid">
            <div className="article-image-container">
              <img
                src={featuredImageUrl}
                alt="Featured Article"
                className="article-card-image"
              />
            </div>

            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onReadMore={handleReadMore}
              />
            ))}
          </div>

          <div className="add-article-button-container">
            <button
              className="add-article-button"
              onClick={() => setAddModalOpen(true)}
            >
              ADD ARTICLE
            </button>
          </div>
        </main>

        {isAddModalOpen && (
          <AddArticleModal onClose={() => setAddModalOpen(false)} />
        )}
        {selectedArticle && (
          <ReadArticleModal
            article={selectedArticle}
            onClose={handleCloseReadModal}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
