import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";

export default function page() {
  return (
    <>
      <div>
        <Button>test</Button>

        <div className="card">
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            chooseLabel="選択"
            uploadLabel="アップロード"
            cancelLabel="キャンセル"
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
          />
        </div>
      </div>
    </>
  );
}
