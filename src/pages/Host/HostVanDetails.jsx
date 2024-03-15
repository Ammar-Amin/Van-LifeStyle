import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import VanDetail from "../../components/VanDetail";

export default function HostVanDetails() {
  let params = useParams();

  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setCurrentVan(data.vans);
      });
  }, []);

  if (!currentVan) return <h2>Loading...</h2>;

  return (
    <div>
      <section>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i
                className={`van-type van-type-${currentVan.type}`}
              >
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
        </div>
      </section>
      <VanDetail />
      <Outlet />
    </div>
  );
}
