import React from "react"
import useEventListener from "../components/useEventListener"

export default function IndexPage() {
  useEventListener("mousemove", event => {
    let pageX = document.body.clientWidth
    let pageY = document.body.clientHeight
    let mouseY = 0
    let mouseX = 0
    //verticalAxis
    mouseY = event.pageY
    const yAxis = ((pageY / 2 - mouseY) / pageY) * 300
    //horizontalAxis
    mouseX = event.pageX / -pageX
    const xAxis = -mouseX * 100 - 100

    document.querySelector(".box__ghost-eyes").style.transform =
      "translate(" + xAxis + "%,-" + yAxis + "%)"
  })

  return (
    <div className="box">
      <div className="box__ghost">
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="box__ghost-container">
          <div className="box__ghost-eyes">
            <div className="box__eye-left"></div>
            <div className="box__eye-right"></div>
          </div>
          <div className="box__ghost-bottom">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="box__ghost-shadow"></div>
      </div>
      <div className="box__description">
        <div className="box__description-container">
          <div className="box__description-title">Whoops!</div>
          <div className="box__description-text">
            It seems like we couldn't find the page you were looking for
          </div>
        </div>
      </div>
    </div>
  )
}
