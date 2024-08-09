type ClickEvent<T = Element> = React.MouseEvent<T, MouseEvent>;

interface CommentBox {
  newsId: string;
}

declare namespace Confirm {
  interface Backdrop {
    show: boolean;
  }

  interface DataState {
    x: number;
    y: number;
    show: boolean;
  }

  interface Ref {
    hide: () => void;
    position: (rect: HTMLDivElement) => void;
    handlers: (okHandler: () => void, cancelHandler: () => void) => void;
  }
}

declare namespace UserComment {
  interface AuthorEntity {
    shortenedName: string;
    fullName?: string;
    avatar: string | null;
  }
  interface CommentEntity {
    id: number;
    text: string;
    created: string;
    likes: number;
    dislikes: number;
    anonymousFlag: boolean;
    parentId: number | null;
    author: AuthorEntity | null;
    children: CommentEntity[] | null;
    like: "liked" | "disliked" | null;
    canEdit: boolean;
    canDelete: boolean;
  }
  interface TextBlock {
    editing: boolean;
  }
  interface ActionsBlock {
    editing: boolean;
  }
  interface LikesState {
    quantity: {
      like: number;
      dislike: number;
    };
    like: CommentEntity["like"];
  }
  interface ChildrenWrapper {
    onReplySend: null | ((state: TextareaContainer.ContainerState) => void);
    children: React.ReactNode;
  }
  interface Component {
    children?: React.ReactNode;
    hideText: boolean;
    comment: Pick<CommentEntity, "id" | "author" | "text" | "created" | "anonymousFlag">;
  }
}
