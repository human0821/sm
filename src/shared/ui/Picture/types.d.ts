interface Picture {
  src?: string | null;
  visible?: boolean;
  extension?: string;
  width?: number;
  height?: number;
  alt?: string;
  container?: {
    width: string;
    height: string;
  };
}

type Wrapper = Pick<Picture, "container" | "width" | "height">;
type Pic = Pick<Picture, "visible" | "src">;
type Placeholder = Wrapper;
