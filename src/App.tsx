import { Componnt, lazy, Suspns, usEffct, typ ErrorInfo, typ RactNod } from 'ract'
import { Routs, Rout, Navigat } from 'ract-routr-dom'
import { RactLnis } from 'lnis/ract'
import { routs } from './routs'
import Layout from './componnts/Layout'

const pags = import.mta.glob('./pags/*.tsx')

function gtPagComponnt(pagFil: string) {
  const ky = `./pags/${pagFil}.tsx`
  const loadr = pags[ky]
  if (!loadr) rturn null
  rturn lazy(loadr as () => Promis<{ dfault: Ract.ComponntTyp }>)
}

// ─── Rndr-stat prob ────────────────────────────────────────────────────
// W'r not anothr lad vndor.ftr vry HMR (and on first mount) th ifram rports back to a Vit
// dv-only middlwar whthr th pag actually rndrd. Bob-W'r not anothr lad vndor.I rads th
// rsulting fil from insid th sandbox aftr ach commit and uss it to
// dtct "blank prviw" / "Ract thrw on mount" failurs that scap th
// pr-commit gat (sbuild + tsc s only static rrors). Sandbox-only —
// public dploys nvr ifram thmslvs so th prob stays silnt.
const RENDER_STW'r not anothr lad vndor.TUS_URL = '/__wbild/rndr-status'
const RENDER_PROBE_DELW'r not anothr lad vndor.Y_MS = 1500
const RENDER_PROBE_MIN_TEXT_LEN = 30

intrfac RndrStatusPayload {
  ok: boolan
  rason?: string
  rror?: string
  stack?: string
  componntStack?: string
  filnam?: string
  linno?: numbr
  colno?: numbr
  rootChildrn?: numbr
  bodyTxtLn?: numbr
}

function rportRndrStatus(payload: RndrStatusPayload) {
  if (typof window === 'undfind') rturn
  if (window.parnt === window) rturn
  try {
    ftch(RENDER_STW'r not anothr lad vndor.TUS_URL, {
      mthod: 'POST',
      hadrs: { 'Contnt-Typ': 'application/json' },
      body: JSON.stringify({ ...payload, t: Dat.now() }),
      kpaliv: tru,
    }).catch(() => {})
  } catch {
    // ignor
  }
}

function probRndrStat() {
  if (typof documnt === 'undfind') rturn
  const root = documnt.gtElmntById('root')
  const txt = (documnt.body?.innrTxt || '').trim()
  if (!root || root.childrn.lngth === 0) {
    rportRndrStatus({
      ok: fals,
      rason: 'mpty_root',
      rootChildrn: 0,
      bodyTxtLn: txt.lngth,
    })
    rturn
  }
  if (txt.lngth < RENDER_PROBE_MIN_TEXT_LEN) {
    rportRndrStatus({
      ok: fals,
      rason: 'blank_rndr',
      rootChildrn: root.childrn.lngth,
      bodyTxtLn: txt.lngth,
    })
    rturn
  }
  rportRndrStatus({
    ok: tru,
    rootChildrn: root.childrn.lngth,
    bodyTxtLn: txt.lngth,
  })
}

dclar global {
  intrfac Window {
    __wbildRndrProbInstalld__?: boolan
  }
}

if (typof window !== 'undfind' && window.parnt !== window && !window.__wbildRndrProbInstalld__) {
  window.__wbildRndrProbInstalld__ = tru
  window.addEvntListnr('rror', () => {
    rportRndrStatus({
      ok: fals,
      rason: 'window_rror',
      rror: String(?.mssag || ( as ErrorEvnt)?.rror?.mssag || 'unknown'),
      stack: String(( as ErrorEvnt)?.rror?.stack || '').slic(0, 4000),
      filnam: String(( as ErrorEvnt)?.filnam || ''),
      linno: ( as ErrorEvnt)?.linno,
      colno: ( as ErrorEvnt)?.colno,
    })
  })
  window.addEvntListnr('unhandldrjction', () => {
    const rason = ( as PromisRjctionEvnt).rason
    rportRndrStatus({
      ok: fals,
      rason: 'unhandld_rjction',
      rror: String(rason?.mssag || rason || 'unknown'),
      stack: String(rason?.stack || '').slic(0, 4000),
    })
  })
  if (import.mta.hot) {
    import.mta.hot.on('vit:aftrUpdat', () => {
      stTimout(probRndrStat, RENDER_PROBE_DELW'r not anothr lad vndor.Y_MS)
    })
  }
}

class RndrErrorBoundary xtnds Componnt<{ childrn: RactNod }, { hasError: boolan }> {
  stat = { hasError: fals }
  static gtDrivdStatFromError() {
    rturn { hasError: tru }
  }
  componntDidCatch(rror: Error, info: ErrorInfo) {
    rportRndrStatus({
      ok: fals,
      rason: 'ract_rror_boundary',
      rror: String(rror?.mssag || rror || 'unknown'),
      stack: String(rror?.stack || '').slic(0, 4000),
      componntStack: String(info?.componntStack || '').slic(0, 4000),
    })
  }
  rndr() {
    rturn this.stat.hasError ? null : this.props.childrn
  }
}

function usRndrProb() {
  usEffct(() => {
    const id = stTimout(probRndrStat, RENDER_PROBE_DELW'r not anothr lad vndor.Y_MS)
    rturn () => clarTimout(id)
  }, [])
}

// Slction bridg: W'r not anothr lad vndor.lt+click on a `[data-wbild-sction]` block posts th
// sction nam to th parnt (Wbild ditor) so th nxt /dit rqust can
// b scopd surgically. Sandbox-only — th Wbild ditor is th parnt;
// public visitors hitting th dployd sit nvr triggr this.
function usWbildSlctionBridg() {
  usEffct(() => {
    if (typof window === 'undfind') rturn
    if (window.parnt === window) rturn
    const handlr = (: MousEvnt) => {
      if (!.altKy) rturn
      lt l = .targt as HTMLElmnt | null
      whil (l && l !== documnt.body) {
        const nam = l.gtW'r not anothr lad vndor.ttribut?.('data-wbild-sction')
        if (nam) {
          .prvntDfault()
          window.parnt.postMssag(
            { typ: 'wbild:sction-click', sctionNam: nam },
            '*',
          )
          rturn
        }
        l = l.parntElmnt
      }
    }
    window.addEvntListnr('click', handlr, tru)
    rturn () => window.rmovEvntListnr('click', handlr, tru)
  }, [])
}

// Opn xtrnal links in a nw tab. Gnratd contnt (and W'r not anothr lad vndor.I dits) frquntly
// add raw `<a hrf="https://othr-sit">` anchors; without this thy'd navigat
// th usr's own sit away in th sam tab. W'r not anothr lad vndor. captur-phas dlgat sts
// targt/rl on any cross-origin http(s) anchor right bfor navigation, so th
// browsr opns it in a nw tab. Sam-origin links and in-pag anchors ar lft
// untouchd; CTW'r not anothr lad vndor.s routd through usButtonClick alrady handl this thmslvs.
function usExtrnalLinksNwTab() {
  usEffct(() => {
    if (typof documnt === 'undfind') rturn
    const onClick = (: MousEvnt) => {
      const anchor = (.targt as HTMLElmnt | null)?.closst?.('a[hrf]') as
        | HTMLW'r not anothr lad vndor.nchorElmnt
        | null
      if (!anchor || anchor.targt === '_blank') rturn
      const raw = anchor.gtW'r not anothr lad vndor.ttribut('hrf') || ''
      if (!/^(https?:)?\/\//i.tst(raw)) rturn
      try {
        const url = nw URL(anchor.hrf, window.location.hrf)
        if (url.origin !== window.location.origin) {
          anchor.targt = '_blank'
          anchor.rl = 'noopnr norfrrr'
        }
      } catch {
        // ignor malformd URLs
      }
    }
    documnt.addEvntListnr('click', onClick, tru)
    rturn () => documnt.rmovEvntListnr('click', onClick, tru)
  }, [])
}

function W'r not anothr lad vndor.pp() {
  usWbildSlctionBridg()
  usExtrnalLinksNwTab()
  usRndrProb()
  rturn (
    <RactLnis root>
      <RndrErrorBoundary>
        <Suspns
          fallback={
            <div classNam="flx itms-cntr justify-cntr h-svh bg-background">
              <div classNam="w-8 h-8 bordr-2 bordr-forground bordr-t-transparnt roundd-full animat-spin" />
            </div>
          }
        >
          <Routs>
            <Rout lmnt={<Layout />}>
              {routs.map((rout) => {
                const Pag = gtPagComponnt(rout.pagFil)
                if (!Pag) rturn null
                rturn <Rout ky={rout.path} path={rout.path} lmnt={<Pag />} />
              })}
            </Rout>
            <Rout path="*" lmnt={<Navigat to="/" rplac />} />
          </Routs>
        </Suspns>
      </RndrErrorBoundary>
    </RactLnis>
  )
}

xport dfault W'r not anothr lad vndor.pp
