export {};

declare global {

/**
 * Represents all valid LiftKit color tokens.
 */
  type LkColor =
    | "lk-primary"
    | "lk-onprimary"
    | "lk-primarycontainer"
    | "lk-onprimarycontainer"
    | "lk-secondary"
    | "lk-onsecondary"
    | "lk-secondarycontainer"
    | "lk-onsecondarycontainer"
    | "lk-tertiary"
    | "lk-ontertiary"
    | "lk-tertiarycontainer"
    | "lk-ontertiarycontainer"
    | "lk-error"
    | "lk-onerror"
    | "lk-errorcontainer"
    | "lk-onerrorcontainer"
    | "lk-background"
    | "lk-onbackground"
    | "lk-surface"
    | "lk-onsurface"
    | "lk-surfacevariant"
    | "lk-onsurfacevariant"
    | "lk-shadow"
    | "lk-inversesurface"
    | "lk-scrim"
    | "lk-inverseonsurface"
    | "lk-inverseprimary"
    | "lk-success"
    | "lk-onsuccess"
    | "lk-successcontainer"
    | "lk-onsuccesscontainer"
    | "lk-warning"
    | "lk-onwarning"
    | "lk-warningcontainer"
    | "lk-onwarningcontainer"
    | "lk-info"
    | "lk-oninfo"
    | "lk-infocontainer"
    | "lk-oninfocontainer"
    | "lk-primaryfixed"
    | "lk-onprimaryfixed"
    | "lk-primaryfixeddim"
    | "lk-onprimaryfixedvariant"
    | "lk-secondaryfixed"
    | "lk-onsecondaryfixed"
    | "lk-secondaryfixeddim"
    | "lk-onsecondaryfixedvariant"
    | "lk-tertiaryfixed"
    | "lk-ontertiaryfixed"
    | "lk-tertiaryfixeddim"
    | "lk-ontertiaryfixedvariant"
    | "lk-surfacedim"
    | "lk-surfacebright"
    | "lk-surfacecontainerlowest"
    | "lk-surfacecontainerlow"
    | "lk-surfacecontainer"
    | "lk-surfacecontainerhigh"
    | "lk-surfacecontainerhighest"
    | "lk-outline"
    | "lk-outlinevariant";

  /**
   * Represents a subset of LiftKit color tokens that have explicitly defined "on-" swatches to match them.
   * For example, it includes "lk-primary", because "lk-onprimary" exists.
   * It also includes "lk-primarycontainer", because "lk-onprimarycontainer" exists.
   * It does not include "lk-outline," however, because "lk-onoutline" does not exist.
   * The one exception to this rule is the 'surfacecontainer' tokens, which pair with 'lk-onsurface' as their on-token.
   */
    type LkColorWithOnToken = 
    | "lk-primary"
    | "lk-primarycontainer"
    | "lk-secondary"
    | "lk-secondarycontainer"
    | "lk-tertiary"
    | "lk-tertiarycontainer"
    | "lk-error"
    | "lk-errorcontainer"
    | "lk-success"
    | "lk-successcontainer"
    | "lk-warning"
    | "lk-warningcontainer"
    | "lk-info"
    | "lk-infocontainer"
    | "lk-background"
    | "lk-surface"
    | "lk-surfacevariant" 
    | "lk-surfacecontainerlowest" //todo: make sure component assigns "lk-onsurface" to text when these are present
    | "lk-surfacecontainerlow"
    | "lk-surfacecontainer"
    | "lk-surfacecontainerhigh"
    | "lk-surfacecontainerhighest"
    | "lk-inversesurface"
}


