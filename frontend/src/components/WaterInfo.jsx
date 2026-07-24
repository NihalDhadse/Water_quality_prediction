import "../styles/waterinfo.css";

function WaterInfo() {
  return (
    <section className="water-info">

      <h1>Water Quality Parameters</h1>

      <div className="info-grid">

        <div className="info-card">
          <h3>💧 pH</h3>
          <p>Measures acidity or alkalinity of water.</p>
        </div>

        <div className="info-card">
          <h3>🪨 Hardness</h3>
          <p>Represents calcium and magnesium concentration.</p>
        </div>

        <div className="info-card">
          <h3>🧪 Solids</h3>
          <p>Total dissolved solids present in water.</p>
        </div>

        <div className="info-card">
          <h3>🧫 Chloramines</h3>
          <p>Disinfectants used during water treatment.</p>
        </div>

        <div className="info-card">
          <h3>🌊 Sulfate</h3>
          <p>Natural mineral dissolved in water.</p>
        </div>

        <div className="info-card">
          <h3>⚡ Conductivity</h3>
          <p>Ability of water to conduct electricity.</p>
        </div>

        <div className="info-card">
          <h3>🌿 Organic Carbon</h3>
          <p>Amount of carbon present in organic compounds.</p>
        </div>

        <div className="info-card">
          <h3>🧬 Trihalomethanes</h3>
          <p>By-products formed during chlorination.</p>
        </div>

        <div className="info-card">
          <h3>🌫 Turbidity</h3>
          <p>Measures cloudiness caused by suspended particles.</p>
        </div>

      </div>

    </section>
  );
}

export default WaterInfo;