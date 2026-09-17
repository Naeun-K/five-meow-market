export function searchAddress() {
  return new Promise((resolve) => {
    // new kakao.Postcode({
    new window.kakao.Postcode({
      oncomplete(data) {
        resolve({
          zoneCode: data.zonecode,
          address: data.roadAddress,
          jibunAddress: data.jibunAddress,
          buildingName: data.buildingName,
        });
      },
    }).open();
  });
}
