import GentleCardLeft from "../attitues/gcardleft";
import GentleCardRight from "../attitues/gcardright";
import "../style/gentlecorner.css";


export default function GentleCard(){
 
  return(
    <div className="gentle-background">
      <div className="gentle-card">
        <GentleCardLeft/>
        <div className="divider"></div> {/* Đây là đường phân cách */}
        <GentleCardRight/>
      </div>
    </div>
  );
}
