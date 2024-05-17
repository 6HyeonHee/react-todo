// 일반 함수이므로 default 사용 X => 네임드 export
export function getImageUrl(person, size = 's') {
  // jsx가 아닌 js 이므로 중괄호는 없이 그냥 백틱
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}
