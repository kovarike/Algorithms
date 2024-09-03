interface PostProps {
  id?: string;
  name: string;
  date?: string;
  tittle: string;
  content: string;
}

export function Post({ content, date, id, name, tittle }: PostProps) {
  return (
    <>
      <div className="mb-5 bg-white p-5 rounded-md shadow-post text-slate-700">
        <h2 className="mt-0">{tittle}</h2>
        <p className="leading-relaxed">{content}</p>
        {/* <div className="mt-2">
                <a href="#">Compartilhar no Facebook</a>
                <a href="#">Compartilhar no Twitter</a>
                <a href="#">Compartilhar no LinkedIn</a>
            </div> */}
        <div className="comment-section">
          <div className="comment">
            <p>
              <strong>{name}</strong>
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
