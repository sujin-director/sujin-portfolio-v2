
export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: 'white', color: 'black', minHeight: '100vh' }}>
      <section style={{ position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?fit=crop&w=1200&q=80"
          alt="무대 연출 샘플"
          style={{ width: '100%', height: '400px', objectFit: 'cover', opacity: 0.7 }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>기획과 연출을 모두 아는 사람, 강수진 PD입니다.</h1>
          <p style={{ fontSize: '1rem' }}>
            기획 흐름과 운영 맥을 아는 연출자,<br />
            팀처럼 움직이는 무대 전문가를 찾고 계셨다면<br />
            지금, 잘 찾아오셨습니다.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#ccc' }}>
            15년의 현장 경험 | 정부·공공기관 행사 다수 진행 | 팀처럼 일하는 연출자
          </p>
        </div>
      </section>
    </div>
  );
}
