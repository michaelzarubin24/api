import { toHTMLFunction } from "./toHTML";

type Event = {
  type: string;
  listener: (event: Event) => void;
};

type Attributes = {
  [key: string]: string;
};

type ComponentProps = {
  tagName: string;
  className?: string;
  children?: Component[];
  html?: string;
  textContent?: string;
  events?: Event[];
} & Attributes;

export class Component {
  private tagName?: string;
  private className?: string;
  private children?: Component[];
  private html?: string;
  private textContent?: string;
  private events?: Event[];
  private attrs: Attributes;

  constructor({
    tagName,
    className,
    children,
    html,
    textContent,
    events,
    ...attrs
  }: ComponentProps) {
    this.tagName = tagName;
    this.className = className;
    this.children = children || [];
    this.html = html;
    this.textContent = textContent;
    this.events = events;
    this.attrs = attrs || {};
  }

  // get
  getTagName(): string | undefined {
    return this.tagName;
  }

  getClassName(): string | undefined {
    return this.className;
  }

  getChildren(): Component[] {
    return this.children || [];
  }

  getHtml(): string | undefined {
    return this.html;
  }

  getTextContent(): string | undefined {
    return this.textContent;
  }

  getEvents(): Event[] | undefined {
    return this.events;
  }

  getAttributes(): Attributes {
    return this.attrs;
  }

  // set
  setTagName(tagName: string): void {
    this.tagName = tagName;
  }

  setClassName(className: string): void {
    this.className = className;
  }

  setChildren(children: Component[]): void {
    this.children = children;
  }

  setHtml(html: string): void {
    this.html = html;
  }

  setTextContent(textContent: string): void {
    this.textContent = textContent;
  }

  setEvents(events: Event[]): void {
    this.events = events;
  }

  // other
  addChildren(children: Component | Component[]): void {
    if (children) {
      if (Array.isArray(children)) {
        this.children.push(...children);
      } else {
        this.children.push(children);
      }
    }
  }

  toHTML(): string {
    return toHTMLFunction(this).outerHTML;
  }
}
