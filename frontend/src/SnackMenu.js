import React from "react";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import SnackOrBoozeApi from "./api/api";

function SnackMenu() {
    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <>
      <Menu type="Snack" items={snacks} />
    </>
  )

}

export default SnackMenu;