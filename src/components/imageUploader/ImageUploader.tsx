import React, { FC, useState, useRef } from "react";
import styled from "styled-components";

// import atoms
import Label from "components/atoms/Label";

// import commons
import Spinner from "components/commons/Spinner";

// import utils
import firebase from "utils/firebase";

interface DefaultProps {
  onChange: (value: string) => void;
  value: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  border: 1px solid black;
  width: 72vw;
  padding: 5px 0px;
  background-color: #fafafa;
  border: 2px #ccc solid;
  outline: none;
  font-size: 1.2rem;
  transition: all 0.2s;
  color: #2d323c;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  width: 70vw;
  height: 31px;
`;

const ImgWrapper = styled.div``;

const LoadingWrapper = styled.div``;

const ImageUploader: FC<DefaultProps> = ({ onChange, value }) => {
  const [img, setImg] = useState("");
  const [imgDownLoaded, setImgDownLoaded] = useState(true);
  const inputEl = useRef<HTMLInputElement | null>(null);

  const ImgB64Resize = (
    imgB64_src: string,
    width: any,
    height: any,
    callback: any,
    rotate: any
  ) => {
    // Image Type
    const img_type = imgB64_src.substring(5, imgB64_src.indexOf(";"));
    // Source Image
    const img = new Image();
    let newFile;
    // img.src = url; // local image url
    img.onload = function() {
      // New Canvas
      const canvas = document.createElement("canvas");

      canvas.width = width;
      canvas.height = height;

      // Draw (Resize)
      const ctx: any = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      // Destination Image
      const imgB64_dst = canvas.toDataURL(img_type);
      // base64のデコード
      const bin = atob(imgB64_dst.replace(/^.*,/, ""));
      // バイナリデータ化
      const buffer = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      // ファイルオブジェクト生成(この例ではjpegファイル)
      newFile = new File([buffer.buffer], "name", {
        type: "image/png"
      });
      callback(newFile);
    };
    img.src = imgB64_src;
  };

  const uniqueId = Math.random()
    .toString(32)
    .substring(2);
  const goFirebase = (newFile: any) => {
    firebase
      .storage()
      .ref()
      .child(`images/${uniqueId}`)
      .put(newFile)
      .then(s => {
        firebase
          .storage()
          .ref()
          .child(`images/${uniqueId}`)
          .getDownloadURL()
          .then(url => {
            onChange(url);
            setImg(url);
            setImgDownLoaded(true);
          });
      });
  };

  const handleOnChange = () => {
    setImgDownLoaded(false);

    let naturalWidth = 0;
    let naturalHeight = 0;

    const file =
      inputEl &&
      inputEl.current &&
      inputEl.current.files &&
      inputEl.current.files[0];
    const fr = new FileReader();

    const image = new Image();
    image.onload = function() {
      naturalWidth = image.naturalWidth;
      naturalHeight = image.naturalHeight;
      const width =
        naturalWidth !== 0 && naturalHeight !== 0
          ? (300 * naturalWidth) / naturalHeight
          : 0;

      fr.onload = (e: any) => {
        ImgB64Resize(e.target.result, Math.round(width), 300, goFirebase, 90);
      };

      file && fr.readAsDataURL(file);
    };
    image.src = URL.createObjectURL(file);
  };

  return (
    <>
      <Wrapper>
        <Label htmlFor={value + "file"}>{value}</Label>
        {/* file to imgのみ、複雑になるので、素のinputタグを利用 */}
        <input
          accept="image/*"
          id={value + "file"}
          multiple
          type="file"
          style={{ display: "none" }}
          onChange={handleOnChange}
          ref={inputEl}
        />
        <LoadingWrapper
          className="createForm-circle"
          style={{
            display: imgDownLoaded ? "none" : "block"
          }}
        >
          <Spinner position="relative" />
        </LoadingWrapper>
      </Wrapper>
      <ImgWrapper className="createForm-image">
        <img src={img} width="100%" />
      </ImgWrapper>
    </>
  );
};

export default ImageUploader;
