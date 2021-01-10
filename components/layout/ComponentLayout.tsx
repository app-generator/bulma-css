import { LiveEditor, LivePreview, LiveProvider } from "react-live";
import { useCallback, useRef, useState } from "react";
import EDITOR_THEME from "../../editorTheme";
import ReactDOMServer from "react-dom/server";
import { formatHtml } from "../../utils/Utils";

interface Props {
  element: JSX.Element;
  component: any;
  title: string;
  jsLink?: string;
  vertical?: boolean;
  hasDarkMode?: boolean;
  containerClasses?: string;
  containerWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

enum STATUS {
  EDIT_CODE = "edit",
  DEFAULT = "default",
}

const ComponentLayout = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const CP = props.component;

  /**
   * We Inject isDark props on Element and Scope
   * https://github.com/FormidableLabs/react-live
   */
  const propsComp = { isDark: props.hasDarkMode && isDarkMode };
  const scope = { CP, propsComp };

  const elementProps = Object.assign({}, props.element.props, {
    isDark: props.hasDarkMode && isDarkMode,
  });
  const finalElement = Object.assign({}, props.element, {
    props: elementProps,
  });

  /**
   * We must use useMemo here but there is an issue with renderToStaticMarkup
   * https://github.com/facebook/react/issues/16416
   */
  const code = useCallback(() => {
    return formatHtml(ReactDOMServer.renderToStaticMarkup(finalElement));
  }, [finalElement]);

  const [hasCopied, setHasCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>();

  const copyCode = () => {
    const el = document.createElement("textarea");
    el.value = code();
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setHasCopied(true);
  };

  const COPY_BTN = () => {
    return (
      <button
        onClick={copyCode}
        className={`button ml-4 ${hasCopied ? "is-primary" : "is-white"}`}
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="mr-2"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
        </svg>
        {hasCopied ? "Copied" : "Copy"}
      </button>
    );
  };

  const [status, setStatus] = useState<STATUS>(STATUS.DEFAULT);
  let previewClasses = "column my-auto is-full-mobile";

  if (props.containerWidth) {
    previewClasses = previewClasses.concat(
      ` is-${props.containerWidth}-desktop is-${props.containerWidth}-tablet`
    );
  } else {
    if (props.vertical || status === STATUS.DEFAULT) {
      previewClasses = previewClasses.concat(` is-full`);
    } else {
      previewClasses = previewClasses.concat(` is-narrow`);
    }
  }

  return (
    <div
      className={`has-background-white mb-6 panel is-white has-background-light ${
        props.containerClasses ? props.containerClasses : ""
      }`}
      key={props.title}
    >
      <div className="is-flex is-flex-wrap-wrap panel-heading is-align-items-center is-justify-content-space-between">
        <p className="is-size-5 has-text-weight-light has-text-grey-dark mb-2">
          {props.title}
        </p>
        <div className="is-flex is-align-items-center is-flex-wrap-wrap is-justify-content-center">
          {props.hasDarkMode && (
            <label className="checkbox is-size-5 has-text-grey has-text-weight-light">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => setIsDarkMode(e.target.checked)}
              />
              Dark mode
            </label>
          )}

          {props.jsLink && (
            <a href={props.jsLink} className="button is-danger">
              Need JS
            </a>
          )}
          <button
            onClick={() => setStatus(STATUS.EDIT_CODE)}
            className="button is-outlined ml-4"
          >
            <svg
              width="20"
              height="20"
              className="mr-2"
              fill="currentColor"
              viewBox="0 0 2048 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
            </svg>
            code
          </button>

          {COPY_BTN()}
        </div>
      </div>

      <LiveProvider
        scope={scope}
        theme={EDITOR_THEME}
        disabled={status !== STATUS.EDIT_CODE}
        language="markup"
        code={code()}
      >
        <div
          className={`panel-block columns is-align-items-flex-start is-multiline is-mobile mt-4 mb-4 pt-6 pb-6 mb-6`}
        >
          <div ref={previewRef} className={previewClasses}>
            <LivePreview />
          </div>

          {status !== STATUS.DEFAULT && (
            <div
              className={`column  ${
                props.vertical ? "mt-4 is-full" : "is-full-mobile"
              } is-relative`}
            >
              <div className="live-editor">
                <div
                  style={{ right: 92, zIndex: 10, top: 20 }}
                  className="absolute"
                >
                  {COPY_BTN()}
                </div>

                <button
                  onClick={() => setStatus(STATUS.DEFAULT)}
                  style={{ zIndex: 30, right: 20, top: 20 }}
                  className="button is-danger absolute"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="h-6 w-6 mx-auto text-gray-800 "
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </button>
                <LiveEditor className="rounded-lg" />
              </div>
            </div>
          )}
        </div>
      </LiveProvider>
    </div>
  );
};

export default ComponentLayout;
