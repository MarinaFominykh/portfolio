export function sendMessage(data, lib, url, id) {
  let message = `<b>Отправитель</b> ${data.name} \n`
  message += `<b>Почта</b> ${data.email} \n`
  message += `<b>Сообщение</b> ${data.message}`
  lib.post(url, {
    chat_id: id,
    parse_mode: "html",
    text: message
  })
}
