import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppContextService, CommonSettingsComponentBase, ConfirmationDialogOptions, SettingsFormService } from '../../../../angular';
import { Subscription } from 'rxjs/Subscription';
export declare class PanelBaseComponent<TModelData> extends CommonSettingsComponentBase implements OnInit, OnDestroy {
    protected appContextService: AppContextService;
    protected router: Router;
    protected activatedRoute: ActivatedRoute;
    protected formbuilder: FormBuilder;
    protected settingsFormService: SettingsFormService;
    formErrors: any;
    validationMessages: any;
    protected modelData: TModelData;
    settingName: string;
    subscription: Subscription;
    saveButtonLabel: string;
    discardButtonLabel: string;
    closeButtonLabel: string;
    nameLabel: string;
    saving: boolean;
    sampleForm: FormGroup;
    constructor(appContextService: AppContextService, router: Router, activatedRoute: ActivatedRoute, formbuilder: FormBuilder, settingsFormService: SettingsFormService, formErrors: any, validationMessages: any, modelData: TModelData, settingName: string);
    ngOnInit(): void;
    ngOnDestroy(): void;
    confirmContinueEditingDialogOptions(dirtyForm: FormGroup, allForms: FormGroup[]): ConfirmationDialogOptions;
    onSaveClick(): void;
    onDiscardClick(): void;
    onCloseClick(): void;
    private onValueChanged(data?);
}
